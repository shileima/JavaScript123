<script>
	export let name,age,count=1,numbers=[0];
	$:doubleCount = count * 2;
	let double = count * 2;
	let button = '<b>点击</b>';
	export function handleClick(){
		/* setInterval(function(){
			count += 1;
		},2000) */
		count += 1;
		return 25;
	}
	function addNumber() {
		numbers.push(numbers.length + 1);
		numbers = numbers; // 这样数组就更新了
	}
	function addNumber2() {
		numbers = [...numbers, numbers.length + 1];
	}
	function addNumber3() {
		numbers[numbers.length] = numbers.length + 1;
	}
	// $: 可以绑定数据，数据变化即可打印状态
	$:console.log(`the count is ${count} and ${numbers}`);
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}! 2019, I am {age}</h1>
<p>count:{count}</p>
<p>$:doubleCount:{doubleCount}</p>
<p>let double:{double}</p>
<p>handleClick:{handleClick()}</p>
<p>numbers:{numbers}</p>
<button on:click={addNumber3}>{@html button}</button>
