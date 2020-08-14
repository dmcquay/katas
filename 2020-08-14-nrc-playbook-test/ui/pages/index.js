import Head from 'next/head'
import fetch from 'isomorphic-fetch'

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello {props.name}
        <ul>
          {props.playbooks.entries.map(playbook => <li id={playbook._id} key={playbook._id}>{playbook.title}. Number of people: {playbook.number_of_people}</li>)}
        </ul>
      </main>

      <style jsx>{`
        main {
          color: red;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const apiToken = '5001826d28af62bd757b49b03174d4'
  const url = 'http://localhost:8080/api/collections/get/playbooks'
  const response = await fetch(url, {headers: {Authorization: `Bearer ${apiToken}`}})
  console.log({status: response.status})
  const playbooks = await response.json()
  console.log({playbooks})
  return {
    props: {
      name: 'Dustin',
      playbooks
    }
  }
}