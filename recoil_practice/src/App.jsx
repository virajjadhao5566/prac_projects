import { useState } from 'react'
import viteLogo from '/vite.svg'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './App.css'
import Counter from './components/counter'
import CharacterCounter from './components/CharacterCounter'
import WithoutRecoil from './components/withoutRecoil';

function App() {
  return (
      <>
        <WithoutRecoil/>
        <RecoilRoot>
          <CharacterCounter/>
        </RecoilRoot>
      </>
  )
}

export default App
