import json

name = 'Test Name'
description = 'Test Description'

payload = r'{"query": "mutation { addTeam (input: { name: \"%s\", description: \"%s\"}) { id, name, description } } "}' % (name, description)

mutation = '''
  mutation {
    addTeam (input: {
      name: "%s", description: "%s"
    }) { id, name, description }
  }
''' % (name, description)

payload2 = json.dumps({ 'query': mutation })

print(payload)
print(payload2)