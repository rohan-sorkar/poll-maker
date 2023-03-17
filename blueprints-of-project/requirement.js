const description =  `we need a poll application. Where users can see the application's polls. And they can participate in every poll. A poll will have some options that users can choose, and they can vote by clicking on options. Each option will be calculated based on their total votes`;

const functionalRequirements = `
1. Users can create a poll. 
2. Users can update and delete a poll. 
3. A poll will have a title and description as well as some options that can be chosen by      users. A poll must have fewer than five options.
4. Users can put their opinion and name while submitting their vote.
5. The total vote of a poll will be displayed 
6. Users can see the opinions of a poll
7. Poll items will be searchable
8. Every data must be validated`;  

const requirementAnalysis = `
=== list of state we need ===
(polls) = [
    {
        id: '',
        title: '',
        description: '',
        options: [{id: '', name: '', vote: 0}],
        opinions: [{id: '', name: '', opinion: ''}],
        totalVote: 0, 
        createdAt: new Date()
    }
]

(isModal) = false
(options) = [{id: '', name: '', vote: ''}]
(searchTerm) = ''
(optionId) = null
(opinion) = {id: '', name: '', opinion: ''}
(selectedPoll) = null
(isShownOpinions) = false
(formState) = {title: '', description: ''}



=== list of handlers we need ===
- createPoll()
- updatePoll()
- deletePoll()
- searchInputChange()
- selectPoll()
- submitVote()
- performSearch()
- changeUserOpinion()
- inputChangeHandler()
- addOption()
- deleteOption()
- optionChangeHandler()
`