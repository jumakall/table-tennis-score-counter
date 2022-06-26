export default {
    template: `
        <div :class="{
            'w-full text-center p-4 text-xl transition-all overflow-hidden absolute z-30': true,
            'h-0 p-0': hidden
        }" style="background-color: #016795;"><slot></slot></div>
    `,

    data() {
        return {
            hidden: false
        }
    },

    props: {
        hidedelay: {
            type: Number,
            default: 3
        } 
    },

    mounted() {
        setTimeout(() => {
            this.hidden = true;
        }, this.hidedelay * 1000);
    }
}