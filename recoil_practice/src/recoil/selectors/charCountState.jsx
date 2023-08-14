import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  
import textState from "../atoms/countState";

const charCountState = selector({
    key:'charCountState',
    get: ({get}) =>{
        const text = get(textState)
        return text.length
    }
})
export default charCountState