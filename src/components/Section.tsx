type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="flex flex-col gap-7 border-t border-line py-12 sm:py-14"
    >
      <h2 id={`${id}-title`} className="font-serif text-3xl tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  )
}
