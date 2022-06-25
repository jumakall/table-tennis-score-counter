export default {
    template: `
        <div class="grid place-content-center text-center relative">
            <span :class="{
                'text-4xl transition-all': true,
                'font-bold text-7xl': active
            }">{{ score }}</span>
            
            <span v-if="false">
                of {{ maximum }}
            </span>

            <span
                class="-z-10 w-full bg-gray-400 absolute bottom-0 transition-all ease-out overflow-hidden"
                :style="{ height: percentCompleted + '%' }"
            >&nbsp;</span>
         </div>
    `,

    props: {
        score: {
            type: Number,
            default: 0
        },
        maximum: {
            type: Number,
            default: 0
        },
        active: {
            type: Boolean,
            default: false
        },
        forcefullheight: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        percentCompleted() {
            return this.forcefullheight ? 100 : this.score/this.maximum*100;
        }
    }
}
