import React from 'react'

function buttonLogout({logout}) {
  return (<>
    <button
        onClick={(e) => logout(e)}
        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
        Logout
      </button>;
          </>
  )
}

export default buttonLogout