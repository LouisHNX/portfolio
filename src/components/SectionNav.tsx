import { useEffect, useState } from 'react'

type Props = {
  label: string
  items: { id: string; label: string }[]
}

export function SectionNav({ label, items }: Props) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A section becomes active when it crosses the upper third of the screen.
      { rootMargin: '-30% 0px -65% 0px' },
    )
    for (const { id } of items) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label={label} className="sticky top-24 hidden self-start pt-14 lg:block">
      <ul className="label flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
              className="block py-1 hover:text-ink aria-[current]:text-accent"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
