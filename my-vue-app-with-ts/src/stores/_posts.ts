import { reactive, readonly } from 'vue';

interface PostsState {
    foo: string
}

export class PostsStore {
    #state: PostsState

    constructor() {
        this.#state = reactive<PostsState>({
            foo: 'foo'
        })
    }

    getState() {
        return readonly(this.#state)
        // marking this as readonly, Vue is going to reactively
        // update the DOM but it cannot be mutated directly
    }
    updateFoo(foo: string) {
        this.#state.foo = foo
    }
}

const store = new PostsStore()

export function usePosts() {
    return store
}

