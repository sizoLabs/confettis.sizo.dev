export default function Check(props: React.HTMLAttributes<HTMLButtonElement>) {
	return (
        <span
            className="text-white text-[14px] mr-5 rounded-[4px]"
        >
            <i className="ti ti-circle-check text-[18px] text-[#3aff0b] align-middle inline-block"></i> { props.children }
        </span>
	)
}