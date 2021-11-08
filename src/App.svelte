<script>
import {  protocol } from "./fxlib/protocol/protocol";
import { info } from "./fxlib/info/info"
import { generator } from "./fxlib/generator/generator"
import { data } from "./fxlib/data/data"
import { fx } from "./fxlib/fx/fx"
import { pipe } from "./fxlib/fx/pipe";


const { log, filter, reduce,map,curry,go} = fx

log(sum)

let updateState = ( {state, user_id, channelId}) => {
  state[user_id] = channelId
  return state
}

let pageState = [
	{user_id: "id1" , channelId: "ch1" , date: "날짜"},
	{user_id: "id2" , channelId: "ch2" , date: "날짜"},
	{user_id: "id3" , channelId: "ch3" , date: "날짜"},
]

go(
	pageState,
	map( p=> { p.user_id == "id1" ? p.channelId= "ch2" : p ; return p }),
	filter(p=>p.user_id == "id1"),
	log
)

</script>
	<main>
		<h1>안녕</h1>

		<!-- {#each info as { id,content }, i}
			<li>
				{id} : {content}
			</li>
		{/each}

		{#each data.product as {price,name}, i}
			<li>
				{name} : {price} 
			</li>
		{/each} 
		-->
	</main>
<style>
</style>