export default {
    template: `
        <div class="grid place-content-center text-center relative">
            <span :class="{
                'text-4xl transition-all z-30 opacity-30': true,
                'font-bold text-7xl opacity-100': active
            }">{{ score }}</span>
            
            <span class="z-30" v-if="false">
                of {{ maximum }}
            </span>

            <span
                class="z-20 w-full absolute bottom-0 transition-all ease-out overflow-hidden"
                :style="{
                    height: percentCompleted + '%',
                    'background-color': '#1E488F'
                }">&nbsp;</span>
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
