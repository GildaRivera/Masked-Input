export default function Input(props){
return <div>
<label
  className="block text-gray-700 text-sm font-bold mb-2"
  htmlFor={props.id}
>
{props.name}
</label>

<input
  className="shadow  border rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
  id={props.id}
  type="text"
  placeholder={props.placeholder}
/>
</div>
}