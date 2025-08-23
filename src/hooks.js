
import { useEffect, useState } from 'react'

export function useActiveSection(ids = []){
  const [active, setActive] = useState(ids[0] || null)

  useEffect(() => {
    const observers = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if(!el) return
      const ob = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              setActive(id)
            }
          })
        }, { threshold: 0.5 }
      )
      ob.observe(el)
      observers.push(ob)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [ids.join(',')])

  return active
}
