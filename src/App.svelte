<script>
import {  protocol } from "./fxlib/protocol/protocol";
import { info } from "./fxlib/info/info"
import { generator } from "./fxlib/generator/generator"
import { data } from "./fxlib/data/data"
import { fx } from "./fxlib/fx/fx"
import { pipe } from "./fxlib/fx/pipe";


const { log, filter, reduce,map,curry,go} = fx

// log([...protocol.iterable , ...protocol.iterable, ...generator.gen123()])
// log([...generator.genOdd(101)])
// log( filter (  a=>a==1 ,[1,2,3] ) )

// log(log(go(
// 	0,a=>a+117, a=>a+1111, log
// )))

// log(
// 	reduce( (a,b)=>a+b ,map(p=>p.price,filter(p=>p.price < 30000 , data.product) ))
// )


// const f= pipe(
// 	a => a+1,
// 	a => a+2,
// 	a => a+3,
// )

log(data.product)
go(
	data.product,
	filter(p=>p.price < 40000 ),
	map(p => p.price),
	reduce((a,b)=>a+b),
	log
)

// log(f(3))
//   const c_add = curry((a, b, c) => a + b + c);
//   log(c_add(1, 2, 3));
//   c_add(1)(2, 3);
//   c_add(1, 2)(3);
//   log(c_add(1)(2)(3));

</script>
	<main>

		{#each info as { id,content }, i}
			<li>
				{id} : {content}
			</li>
		{/each}

		{#each data.product as {price,name}, i}
			<li>
				{name} : {price} 
			</li>
		{/each}
	</main>
<style>
</style>