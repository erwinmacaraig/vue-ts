import { defineStore } from "pinia";
import { DateTime } from "luxon";
import { Post, TimelinePost, today, thisWeek, thisMonth } from "../posts";
import { Period } from "../constants";
interface PostsState {
    ids: string[];
    all: Map<string, Post>;
    selectedPeriod: Period;
}

export const usePosts = defineStore("posts", {
    state: (): PostsState => ({
        ids: [today.id, thisWeek.id, thisMonth.id],
        all: new Map([
            [today.id, today],
            [thisWeek.id, thisWeek],
            [thisMonth.id, thisMonth],
        ]),
        selectedPeriod: "Today",
    }),
    actions: {
        setSelectedPeriod(period: Period) {
            this.selectedPeriod = period;
        },
    },
    getters: {
        filteredPosts: (state: { ids: any[]; all: { get: (arg0: any) => any; }; selectedPeriod: string; }): TimelinePost[] => {
            return state.ids
                .map((id) => {
                    const post = state.all.get(id);
                    if (!post) {
                        throw Error(`Post with id ${id} was expected but not found`);
                    }
                    return {
                        ...post,
                        created: DateTime.fromISO(post.created),
                    };
                })
                .filter((post) => {
                    if (state.selectedPeriod === "Today") {
                        return post.created >= DateTime.now().minus({ day: 1 });
                    }
                    if (state.selectedPeriod === "This Week") {
                        return post.created >= DateTime.now().minus({ week: 1 });
                    }
                    return post;
                });
        },
    },
});
