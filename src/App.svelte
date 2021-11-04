<script>
import {  protocol } from "./fxlib/protocol/protocol";
import { info } from "./fxlib/info/info"
import { generator } from "./fxlib/generator/generator"
	
console.log([...protocol.iterable , ...protocol.iterable, ...generator.gen123()])
console.log([...generator.genOdd(101)])

</script>
	<main>

		{#each info as { id,content }, i}
			<li>
				{id} : {content}
			</li>
		{/each}

		{#each [ ...protocol.iterator,...protocol.iterable] as value, i}
			<li>
				{value} 
			</li>
		{/each}
	</main>
<style>
</style>