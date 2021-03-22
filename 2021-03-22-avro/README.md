Created this to troubleshoot/understand why line 8 of result.json gets introduced

`"exp.channels.v1.SectionData": {`

Result: When encoding the data using the avsc library directy, the extra line did not get added. We are going to try schemaRegistry next to see if it is the culprit.