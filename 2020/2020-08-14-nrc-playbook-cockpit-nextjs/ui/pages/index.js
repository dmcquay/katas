import fetch from 'isomorphic-fetch'

export default function Home(props) {
  return (
      <ul>
        {props.playbooks.entries.map(playbook => <li id={playbook._id} key={playbook._id}>{playbook.title}. Number of people: {playbook.number_of_people}. Body: <div dangerouslySetInnerHTML={{__html: playbook.content}}/></li>)}
      </ul>
  )
}

export async function getStaticProps() {
  const apiToken = '5001826d28af62bd757b49b03174d4'
  const url = 'http://localhost:8080/api/collections/get/playbooks'
  const response = await fetch(url, {headers: {Authorization: `Bearer ${apiToken}`}})
  const playbooks = await response.json()
  return {
    props: {
      playbooks
    }
  }
}