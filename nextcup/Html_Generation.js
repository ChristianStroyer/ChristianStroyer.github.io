class Base{
    constructor(){
        this.base = document.createElement('div');
    }
    getElement() {
        return this.base;
    }
}

class API_Choice extends Base{
    constructor(){
        // ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'API_Choice'
        this.base.classList.add('SideBySideEven');

        //api key input
        this.input_APIKey = document.createElement('input')
        //this.input_APIKey.type = 'string'
        this.input_APIKey.placeholder = 'Enter API Key';
        this.base.appendChild(this.input_APIKey);

        /////////////////////////////////////////////////////////////////////////////////
        this.input_APIKey.value = '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'
        /////////////////////////////////////////////////////////////////////////////////

        // Create the multiple choice gpt version
        this.selectVersion = document.createElement('select');
        
        const option1 = document.createElement('option');
        option1.text = 'gpt-3.5-turbo-0613';
        this.selectVersion.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.text = 'gpt-3.5-turbo';
        this.selectVersion.appendChild(option2);
        
        this.base.appendChild(this.selectVersion);

        // ---------- interactivity ----------
        // Add event listeners to capture input and select values
        this.input_APIKey.addEventListener('input', this.setAPIKey.bind(this));
        this.selectVersion.addEventListener('change', this.setMlVersion.bind(this));
     }
 
     setAPIKey(event) {
         // Update global variable with input value
         apiKey = event.target.value;
     }
 
     setMlVersion(event) {
         // Update global variable with selected option value
         mlModel = event.target.value;
     }
}


// setup*

class LearningStyle extends Base{
    constructor(){
        // ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'LearningStyle'
		this.base.classList.add('Vertical');

        //learning style in
        this.input_LearningStyle = document.createElement('textarea')
        this.input_LearningStyle.rows = '4'
        this.input_LearningStyle.cols = '50'
        this.input_LearningStyle.placeholder = 'Learning Style (can be left blank)\n\nexample: short consice expanations or describe things as simple rules that is easy to memorize';
        this.base.appendChild(this.input_LearningStyle);
        
		// ---------- interactivity ----------
        // Add event listeners to capture input and select values
        this.input_LearningStyle.addEventListener('change', this.LearningStyleUpdate.bind(this));
    }
	LearningStyleUpdate(event){
		learningStyle = event.target.value;
	}
}
let learningStyle = '';

//wish to learn -> individual subjects
class identifyLearningAreas extends Base{
    constructor(){
        // ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'LearningAreas'
        this.base.classList.add('Vertical');

        //Learning wishes / wish to learn / Goal
        this.input_LearningGoal = document.createElement('textarea')
        this.input_LearningGoal.rows = '5'
		this.input_LearningGoal.cols = '50'
        this.input_LearningGoal.placeholder = 'i want to learn... \n\nWrite what large subject you wish to learn, or what goal you wish to forfill where learning multiple smaller things would help';
		this.base.appendChild(this.input_LearningGoal);

		// adds subjects needed to complete goal, to next box
		this.calculateSubGoalsButton = document.createElement('button');
		this.calculateSubGoalsButton.textContent = "Calculate sub goals"
		this.base.appendChild(this.calculateSubGoalsButton)


        // individual subjects / Learning plan
            // gets generated when previous box gets filled
        this.input_LearningPlan = document.createElement('textarea')
        this.input_LearningPlan.rows = '20'
        this.input_LearningPlan.cols = '50'
        this.input_LearningPlan.placeholder = 'outofilled \nedit as you wish \n\nGets generated when previous box gets filled.\nContains a plan of the individual things in each subject you wish to learn, you will begin from the start';
        this.base.appendChild(this.input_LearningPlan);

        // ---------- interactivity ----------
        // Add event listeners to capture input and select values
        this.calculateSubGoalsButton.addEventListener('click', this.learningSubGoalUpdate.bind(this));// 'input' for every edit, 'change' when on is finished
        this.input_LearningPlan.addEventListener('change', this.subdevideSubGoas.bind(this));
     }
 
    async learningSubGoalUpdate(event) {
		// Update global variable with input value
        const learningGoalContent = this.input_LearningGoal.value;

        //update learning plan
        const messages = [
            new OpenAIMessage(OpenAIRole.system, 
                `the user will provided you with a goal, subject or something they wish to learn.

                your assignment is to respond with a list of all the individual subjects they need to learn to achive what they wish to learn.
                if the user provides something other than the expected, then you should respond only with "ERROR"
				`
            ),//should probably change from steps needed, to things to learn, if not then output lists could be inapropriat for the rest of the designed features
            new OpenAIMessage(OpenAIRole.user,
                `
                GOAL:
                ${learningGoalContent}
                `
            )
        ];

        let responseContent = await sendMessagesToOpenAI(messages);
        console.log(`\n\nresponseContent from sendMessagesToOpenAI:\n${responseContent}\n\n`);

        let extractedMessage = await extractMessageFromOpenAIJson(responseContent);
        console.log(`\n\nExtractedMessage from responseContent:\nrole: ${extractedMessage.role}\ncontent: ${extractedMessage.content}\n\n`);

        this.input_LearningPlan.value = `${this.input_LearningPlan.value}\n${extractedMessage.content}`;
		
		// Trigger a 'change' event programmatically
		let triggerChaneEvent = new Event('change', {
			bubbles: true,
			cancelable: true,
		});
		this.input_LearningPlan.dispatchEvent(triggerChaneEvent);

     }

	 subdevideSubGoas(){
		//https://chat.openai.com/share/aaf63598-89b8-4616-b3a9-09019829b523
		
		const learningPlanContent = this.input_LearningPlan.value;
		console.log(learningPlanContent+"\n\n\n")

		// Split the string into an array using regex to match the numbered points
		const elements = learningPlanContent.split(/\n+/).filter(item => item.trim() !== "");

		// Filter and map the elements to remove the numbers
		const result = elements
		.filter(element => /^\d+\.\s/.test(element)) // Filter elements that start with a number
		.map(element => element.replace(/^\d+\.\s/, "").trim()); // Remove the number and trim whitespace


		subGoals = result
		console.log(subGoals)

		// Iterate through the elements and log each string
		for (const element of result) {
		console.log(element.trim()); // Use trim() to remove leading/trailing whitespace
		}
	 }
}
let subGoals = []



// start learning
// should instances explanation of first thing in sub goal list

class StartLearning extends Base{
    constructor(){
        // ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'StartLearning'

		
		//2 buttons
		this.buttons = document.createElement('div');
		this.buttons.classList.add('SideBySideEven');
			//explain next subject
			this.startLearningButton = document.createElement('button');
			this.startLearningButton.textContent = "Start-Learning"
			this.buttons.appendChild(this.startLearningButton)
		
		this.base.appendChild(this.buttons);


		// ---------- interactivity ----------
        // Add event listeners to capture input and select values
        this.startLearningButton.addEventListener('click', this.addExplanation.bind(this));
	}
	addExplanation(){
		document.body.appendChild((new ExplainSubjet(subGoals[0])).getElement());
	}
}




// explanation of 'subject'
class ExplainSubjet extends Base{
    constructor(subject){
        // ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'ExplainSubjet'

		// variables:
		this.subject = subject
		this.explanation = ''
		

		//titel
		this.titel_subject = document.createElement('h2')
		this.titel_subject.textContent = `Explanation of: ${this.subject}`;
		this.base.appendChild(this.titel_subject);

		//explanation
		this.explanation_subject = document.createElement('p')
		this.base.appendChild(this.explanation_subject);


        //chat about explanation

        
        //2 buttons
		this.buttons = document.createElement('div');
		this.buttons.classList.add('SideBySideEven');
			//explain next subject
			this.explainButton = document.createElement('button');
			this.explainButton.textContent = "Next-Subject"
			this.buttons.appendChild(this.explainButton)
			//take a queiz
			this.assignmentButton = document.createElement('button');
			this.assignmentButton.textContent = "Assignment"
			this.buttons.appendChild(this.assignmentButton)
		
		this.base.appendChild(this.buttons);


		// ---------- interactivity ----------
        // Add event listeners to capture input and select values
		this.generateExplanation(this.subject)

        this.explainButton.addEventListener('click', this.addExplanation.bind(this));
        this.assignmentButton.addEventListener('click', this.addAssignment.bind(this));
        
    }
	async generateExplanation(subject){
		const messages = [
			new OpenAIMessage(OpenAIRole.system, 
				`
				the user will provided you with a subject they wish to learn.\n
				please explain it so they are sure to understand.\n
				${learningStyle != '' ? `\nthe user has provided this way, wich they prefer to learn:\n${learningStyle}` : ''}
				`
			),
			new OpenAIMessage(OpenAIRole.user,
				`
				SUBJECT:
				${subject}
				`
			)
		];

		let responseContent = await sendMessagesToOpenAI(messages);
		console.log(`\n\nresponseContent from sendMessagesToOpenAI:\n${responseContent}\n\n`);

		let extractedMessage = await extractMessageFromOpenAIJson(responseContent);
		console.log(`\n\nExtractedMessage from responseContent:\nrole: ${extractedMessage.role}\ncontent: ${extractedMessage.content}\n\n`);
		
		this.explanation = extractedMessage.content;

		this.explanation_subject.innerHTML = extractedMessage.content.replace(/\n/g, '<br>');
	}

	addExplanation(){
		subGoals.shift();
		document.body.appendChild((new ExplainSubjet(subGoals[0])).getElement());
	}
	addAssignment(){
		document.body.appendChild((new Assignment(this)).getElement());
	}
}

class Assignment extends Base{
	constructor(parent){
		// ---------- Base Html ----------
        super(); // Call the parent class's constructor
        this.base.id = 'Assignment'

		// variables:
		this.subject = parent.subject
		this.explanation = parent.explanation
		this.assignmentContent = ''

		//overskrift
        this.titel_subject = document.createElement('h2')
		this.titel_subject.textContent = `Assignment about: ${this.subject}`;
        this.base.appendChild(this.titel_subject);

        //assignment
		this.assignment = document.createElement('p')
		this.generateAssignment(this.subject,this.explanation);
        this.base.appendChild(this.assignment);


		//2 buttons
		this.buttons = document.createElement('div');
		this.buttons.classList.add('SideBySideEven');
			//explain next subject
			this.explainButton = document.createElement('button');
			this.explainButton.textContent = "Next-Subject"
			this.buttons.appendChild(this.explainButton)
			//take a queiz
			this.assignmentButton = document.createElement('button');
			this.assignmentButton.textContent = "Take-Quiz"
			this.buttons.appendChild(this.assignmentButton)
		
		this.base.appendChild(this.buttons);


		// ---------- interactivity ----------
        // Add event listeners to capture input and select values
        this.explainButton.addEventListener('click', this.addExplanation.bind(this));
        this.assignmentButton.addEventListener('click', this.addAssignment.bind(this));
	}
	async generateAssignment(subject,explanation){
		
		/*\n
				Possible later responses from the user you should be prepared to respond to:\n
				- the user can ask you to explain the assignment differently\n
				- the user can also ask you to help them get past where they presently are stuck in the assignment\n
				- the user can ask you to evaluate their solution to the assignment and then its your job to grade and give constructive feedback, if the user hasn't given the correct answer then tell them how far away they are and guid them in the right direction.
*/

		const messages = [
			new OpenAIMessage(OpenAIRole.system,`
				BACKGROUND:\n
				The user is courently learning about the following subject: ${subject}\n
				The user has seen this explanation of the subject:${explanation}\n
				\n\n\n
				INSTRUCTION:\n
				Your job is to create one short assignment about the subject.\n
				One should be able to answer the assignment within 2 to 8 minutes. 
				The user should have the ability to answer the assignment with the things they have read in the explanation.\n
				\n
				Also take into account that there can be more assignments later.
				`
			),
			new OpenAIMessage(OpenAIRole.user,
				`
				Please make an assignment.
				`
			)
		];

		let responseContent = await sendMessagesToOpenAI(messages);
		console.log(`\n\nresponseContent from sendMessagesToOpenAI:\n${responseContent}\n\n`);

		let extractedMessage = await extractMessageFromOpenAIJson(responseContent);
		console.log(`\n\nExtractedMessage from responseContent:\nrole: ${extractedMessage.role}\ncontent: ${extractedMessage.content}\n\n`);
		
		this.assignmentContent = extractedMessage.content;

		this.assignment.innerHTML = extractedMessage.content.replace(/\n/g, '<br>');
	}
	addExplanation(){
		subGoals.shift();
		document.body.appendChild((new ExplainSubjet(subGoals[0])).getElement());
	}
	addAssignment(){
		document.body.appendChild((new Assignment(this.subject)).getElement());
	}	
}

