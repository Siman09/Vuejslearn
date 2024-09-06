export default {

    template: `
    
       <button :class="buttonCSS"><slot /><button>
    
    
    `,
    data() {
        return {
            buttonCSS: {
                'bg-red-400 text-white px-2 py-2 rounded mx-2':true,
            },

        }
    },
    props: {
        type: {
            type: String,
            default: 'primary',
        }
    }




}