

// save a user to database

export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.name,
        photoURL: user.photoURL
    }

  
    fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  
  // update selected course information in user database
  //export const selectCourse = id => {
    // const currentUser = {
    //   courseId: id,
    // }
  
    // return fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`, {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(currentUser),
    // }).then(res => res.json())
  //}
  // become a admin
  export const becomeAdmin = email => {
    const currentUser = {
      role: 'admin',
    }
  
    return fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }
  // become a instructor
  export const becomeInstructor = email => {
    const currentUser = {
      role: 'instructor',
    }
  
    return fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(res => res.json())
  }
  // class status become approved
  export const becomeApproved = id => {
    const currentClass = {
      status: 'approved',
    }
  
    return fetch(`${import.meta.env.VITE_SERVER_URL}/classdata/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentClass),
    }).then(res => res.json())
  }
  
  // Get role
  export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
  }
  export const getUserId = async email => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/${email}`)
    const user = await response.json()
    return user?._id
  }
  