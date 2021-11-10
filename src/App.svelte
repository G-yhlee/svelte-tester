<script>
import {  protocol } from "./fxlib/protocol/protocol";
import { info } from "./fxlib/info/info"
import { generator } from "./fxlib/generator/generator"
import { data } from "./fxlib/data/data"
import { fx } from "./fxlib/fx/fx"
import { fx2 } from "./fxlib/fx/fx2/fx2"
import { pipe } from "./fxlib/fx/pipe";
import { product } from "./fxlib/data/product";

const { log, filter, reduce,map,curry,go} = fx
const { sum,_total_price,_total_quantity  } = fx2.custom_sum

</script>
<table>
	<tr>
		<th>상품이름</th>
		<th>가격 </th>
		<th>수량</th>
		<th>총 가격</th>
	</tr>
	{@html
		go(
			data.product,
			sum(p=>`
			<tr>
				<td>${ p.is_selected? `>${p.name}` : p.name}</td>	
				<td>${p.price}</td>	
				<td>${p.quantity}</td>	
				<td>${p.quantity * p.price }</td>	
			</tr>
			`
			)
		)
	}
	<tr>
		<td colspan="2"> 선택 합계</td>
		<td> {_total_quantity(filter(p=>p.is_selected, data.product))}</td>
		<td> {_total_price(filter(p=>p.is_selected, data.product))}</td>
	</tr>
</table>
<style>
</style>