'use client'
import Main from '../components/main/Main'
import Promotion from '../components/promotion/Promotion'
import Suggestion from '../components/suggestion/Suggestion'
import Latest from '../components/latest/Latest.jsx'
export default function Home() {
  return (
<div>
  <Main />
  <Promotion />
  <Suggestion />
  <Latest />
</div>
  );
}
