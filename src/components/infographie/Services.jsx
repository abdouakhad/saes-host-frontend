import React from 'react'
import SingleService from './SingleService'
import service0 from '../../svg/11-Delivery-rafiki.svg'
import service1 from '../../svg/12-pencil-alt-solid.svg'
import service2 from '../../svg/13-rocket-solid.svg'
import service3 from '../../svg/14-money-check-alt-solid.svg'

const p1 =
  'Lorem ipsumLorem ipsum dolor sit amet, Infography elit, sed do eiusmod Logo incididunt ut la.'

function Services() {
  return (
    <div className='page3 my-5'>
      <div class='bg-black text-white py-8 text-center'>
        <h1 class='text-3xl font-bold special'>Our Services</h1>
      </div>
      <div class='service1 flex flex-col text-black justify-center items-center'>
        <div class='svg w-96'>
          <img src={service0} alt='Service' />
        </div>
        <p class=' w-8/12 m-auto text-center font-semi-bold tracking-wider'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
      <div class='info w-9/12 mt-8 text-black m-auto'>
        <div class='grid md:grid-cols-3 grid-cols-1 gap-3 justify-center items-center'>
          <SingleService img={service1} text={p1} />
          <SingleService img={service2} text={p1} />
          <SingleService img={service3} text={p1} />
        </div>
      </div>
    </div>
  )
}

export default Services
