export default
    {
        template:
            `
        <div class="text-white">
            <p >{{ title }}</p>
            <button v-on:click="alert()">Click Me</button>
            <p class="text-white">Length of title: {{ value }}</p>
        </div>
    `,

        data() {
            return {
                title: "This is a header"
            }
        },

        methods:
        {
            alert() {
                return alert(this.title);
            }
        },

        computed: {
            value() 
            {
                return this.title.length;
            }
        }
        
    }