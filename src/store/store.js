import  {configureStore} from '@reduxjs/toolkit'
import realSlices from './realEstateSlice'
const store=configureStore({
    reducer:{
        realSlices:realSlices,
    }
})
export default store