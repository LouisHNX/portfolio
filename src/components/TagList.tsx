export function TagList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul
      aria-label={label}
      className="label flex flex-wrap gap-x-2 [&>li+li]:before:mr-2 [&>li+li]:before:content-['·']"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
