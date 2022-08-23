import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getBootCampRequest, delBootCampRequest } from '../../../redux-saga/actions/bootcamp-apply'

export default function Dashboard() {
    const dispatch = useDispatch()
    const {bootcamp_apply} = useSelector(state => state.bootcampapplyState)
    
    useEffect(() => {
        dispatch(getBootCampRequest())
    }, [])

    const onDelete = async (id) =>{
        dispatch(delBootCampRequest(id))
    }
  return (
    <div class ='m-10'>
        {
            bootcamp_apply && bootcamp_apply.map(botap => {
                return (
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white">        
        <a href="#">
        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">.Net Core Bootcamp</h5>
            </a>
            <div>
                <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Apply Date : </label>
            </div>
            <div>
            <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Status : {botap.boap_status} </label>
            </div>
            <div>
                <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Last Progress : </label>
            </div>
        </div>
        </div>
                        )
                    })
                } 
        </div> 
    )
}
