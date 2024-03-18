export default function Input(props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm">
        {props.label}
      </label>
      <span className="text-sm text-gray-200">
        {props.inputDescription}
      </span>
      <input
        type="text"
        placeholder={props.placeholder}
        className="flex text-black flex-col bg-white-300 rounded outline-none w-full p-2"
      />
    </div>
  ) 
}