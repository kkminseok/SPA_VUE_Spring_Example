import {createApp, ref, computed} from 'vue'

const app = createApp({})

app.component('item-main',{
    setup(){
        const items = ref([
            {name : 'CPU', price : 43722, qu : 1},
            {name: 'mainboard', price: 2134521, qu:2},
            {name: 'memory', price: 79203, qu:4},
        ])
        return{
            items,
        }
    },
    template : 
    `<ul>
        <li v-for="item in items" v-bind:key="item.name">
            {{item.name}}의 가격 : <input type="text" v-on:input="item.price = $event.target.value" v-bind:value="item.price">
        </li>
    </ul>
    <hr>
    <item-list v-bind:items="items"></items-list>
    `
})

app.component('item-list',{
    props:{
        items:{
            type:Object,
            default: () =>{
                return []
            }
        }
    },
    setup(props){
        const totalPrice = computed(()=>{
            return props.items.reduce(function(sum,item){
                return sum + (item.price * item.qu)
            },0)
        })

        return {
            totalPrice,
        }
    },
    template:
    `
        <div>
            <ul>
                <li v-for="item in items" v-bind:key="item.name">
                    {{item.name}}: {{item.price}} * {{item.qu}} = {{item.price * item.qu}}원
                </li>
            </ul>
        </div>
    `

})

app.mount('#app')