import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Supabase Integration Test</h1>
      <ul class="space-y-2">
        {todos?.map((todo) => (
          <li key={todo.id} class="p-3 bg-white shadow rounded-lg border border-gray-100 flex items-center gap-3">
             <span class="w-2 h-2 bg-primary rounded-full"></span>
             {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
