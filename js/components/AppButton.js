export default {

    template: `
    
       <button :class="{
       'bg-red-400 text-white px-2 py-1 rounded mx-2': type==='primary',
       'bg-blue-400 text-white px-2 py-1 rounded mx-2': type==='secondary',
       'bg-green-400 text-white px-2 py-1 rounded mx-2': type==='success',
       'bg-yellow-400 text-white px-2 py-1 rounded mx-2': type==='warning',
       }"> <slot /><button>
    `,
    data() {
        return {
         

        }
    },
    props: {
        type: {
            type: String,
            default: 'primary',
        }
    },




}