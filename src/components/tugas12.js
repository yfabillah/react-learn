import React, { useEffect, useState, useContext } from 'react'
import { Table } from 'flowbite-react'
import { GlobalContext } from '../context/GlobalContext'

const Tugas12 = () => {

    const {state, handlingFunction} = useContext(GlobalContext)
    const {
      data, setData, 
      input, setInput, 
      currentId, setCurrentId, 
      fetchStatus, setFetchStatus
    } = state

    const {
      handleIndexScore, 
      handleInput, 
      handleSubmit, 
      handleDelete, 
      handleEdit,
      fetchData
    } = handlingFunction

    useEffect(() => {
      if(fetchStatus === true){
        fetchData()
      }
    }, [fetchStatus, setFetchStatus])

    
    
  return (
    <>

      <hr />

      <div className='ml-72 mt-14 mr-96'>
        <Table>
          <Table.Head className='bg-gray-50'>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Nama</Table.HeadCell>
              <Table.HeadCell>Nilai</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Index Nilai</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          { !data !== null && data.map((res, index) => {
            return(
              <Table.Body className='bg-white dark:border-gray-700 dark:bg-gray-800' key={index}>
                <Table.Row className='divide-y'>
                  <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'> {index + 1}</Table.Cell>
                  <Table.Cell> {res.name}</Table.Cell>
                  <Table.Cell> {res.score} </Table.Cell>
                  <Table.Cell> {res.course}</Table.Cell>
                  <Table.Cell> {handleIndexScore(res.score)}</Table.Cell>
                  <Table.Cell>
                    <button
                      value={res.id}
                      onClick={handleEdit}
                      className="text-white 
                              bg-blue-700 
                              hover:bg-blue-800 
                              focus:ring-4 
                              focus:ring-blue-300 
                              font-medium 
                              rounded-md 
                              text-sm 
                              px-2.5 
                              py-2 
                              mr-4 
                              dark:bg-blue-600 
                              dark:hover:bg-blue-700 
                              focus:outline-none 
                              dark:focus:ring-blue-800"
                      >
                      Edit
                      </button>
                      <button
                      value={res.id}
                      onClick={handleDelete}
                      className="focus:outline-none 
                              text-white 
                              bg-red-700 
                              hover:bg-red-800 
                              focus:ring-4 
                              focus:ring-red-300 
                              font-medium 
                              rounded-lg 
                              text-sm 
                              px-2.5 
                              py-2 
                              mr-4 
                              dark:bg-red-600
                              dark:hover:bg-red-700 
                              dark:focus:ring-red-900"
                      >
                      Delete
                  </button>
                </Table.Cell>
                </Table.Row>
              </Table.Body>
            )
          })}
        </Table>

        <p className='text-center'>Form Data</p>

        {/* <form onSubmit={handleSubmit}>
          <span>Nama: </span>
          <input onChange={handleInput} value={input.name} name = 'name' type='text' />
          <span>Mata Kuliah: </span>
          <input onChange={handleInput} value={input.course} name = "course" type='text'/>
          <span>Nilai: </span>
          <input onChange={handleInput} value={input.score} name = "score" type='text' />
          <button type={'submit'}>Kirim</button>
        </form> */}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
            <input 
              onChange={handleInput} 
              value={input.name} 
              name = 'name'
              type="text" 
              id="name" 
              className="
                bg-gray-50 border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                block 
                w-full 
                p-2.5 
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500" 
                placeholder="name" 
                required/>
          </div>
          <div className="mb-6">
            <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
            <input 
              onChange={handleInput} 
              value={input.course} 
              name = "course" 
              type="text" 
              id="course" 
              className="
                bg-gray-50 border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                block w-full p-2.5 
                dark:bg-gray-700 
                dark:border-gray-600
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500"
                placeholder='mata kuliah' 
                required/>
          </div>
          <div className="mb-6">
            <label htmlFor="score" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai</label>
            <input 
              onChange={handleInput} 
              value={input.score} 
              name = "score" 
              type="text" 
              id="score" 
              className="
                bg-gray-50 border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                block w-full p-2.5 
                dark:bg-gray-700 
                dark:border-gray-600
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500"
                placeholder='nilai' 
                required/>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>


      </div>
    </>
  )
}

export default Tugas12