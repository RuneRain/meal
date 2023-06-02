import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
/* 컴포넌트 모아주는 역할 */
/* 모듈.css의 경우에는 컴포넌트1, module1씩 주는 편
대용량의 페이지에서 관리하기 편하다는 장점이 있음.
단점은 만들기 힘들다. */

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}

export default Meals