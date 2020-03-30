/* ------------------------------------------------------------------------------------------ */
/* DISPLAY LOG TASKS */
/* ------------------------------------------------------------------------------------------ */

/* TASK FUNCTIONS */
/* ------------------------------------------------------------------------------------------ */
function displayLogTasks(callType, taskName, taskPath, text, type = 'task') {
	if (type === 'task') {
		console.log(
	    	`\n\n----------------------------------------------------------------------
             \n> ${callType.toUpperCase()}: ${taskName.toUpperCase()} TASKS <
             \n----------------------------------------------------------------------
             \nINPUT: ${taskPath}\n`
	    )
	} else if (type === 'server') {
		console.log(
	    	`\n\n----------------------------------------------------------------------
             \n> ${text.toUpperCase()} <
             \n----------------------------------------------------------------------
             \nENVIORNMENT: ${taskPath}\n`
	    )
	}
}


module.exports = { displayLogTasks }