import '../../styles/table.css'

function GuardTable() {
  const guards = [
    {
      id: 1,
      name: 'Ravi Kumar',
      site: 'Main Gate',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Suresh',
      site: 'Warehouse',
      status: 'Off Duty',
    },
  ]

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Site</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {guards.map((guard) => (
            <tr key={guard.id}>
              <td>{guard.id}</td>
              <td>{guard.name}</td>
              <td>{guard.site}</td>
              <td>{guard.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GuardTable
