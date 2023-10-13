<script>
    import {count } from "../store";
    import {time, elasped} from '../readblestore';



const formatter = new Intl.DateTimeFormat(
		'en-gb',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);

</script>
<style>
    .buttons{
        display: flex;
    }

    .button{
        padding: 7px;
        margin: 7px;
        background: none;
        border: 1px solid #ddd;
        cursor: pointer;
    }

</style>
<p>time is {formatter.format($time)}</p>
<p>time elasped is {$elasped} </p>
<p> count is {$count} </p>
<div class="buttons" >
    <button class="button" on:click={count.increase}>Increment</button>
    <button class="button" on:click={count.decrease}>Decrement</button>
    <button class="button" on:click={count.reset}>Reset</button>
</div>