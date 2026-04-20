document.addEventListener("change", calculateCgpa);

// document.addEventListener("click", addSemester);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-course")) {
        e.target.closest(".course-row").remove()
        // calculateCgpa()
    } else if (e.target.classList.contains("add-course")) {
        let semester = e.target.closest(".semester");
        let course = semester.querySelector(".courses")

        course.insertAdjacentHTML("beforeend",
            `            <div class="course-row">
            <input type="text" class="course" placeholder="Course name">
            <select name="Grade" class="grade">
            <option value="" selected hidden>Grade</option>
                <option value="4.0">A+ (90+)</option>
                <option value="4.0">A (85-89)</option>
                <option value="3.8">A- (80-84)</option>
                <option value="3.4">B+ (75-79)</option>
                <option value="3.0">B (71-74)</option>
                <option value="2.8">B- (68-70)</option>
                <option value="2.4">C+ (64-67)</option>
                <option value="2.0">C (61-63)</option>
                <option value="1.8">C- (57-60)</option>
                <option value="1.4">D+ (53-56)</option>
                <option value="1.0">D (45-52)</option>
                </select>
                <select name="credits" class="credits">
                <option value="" disabled selected hidden>Credits</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                </select>
                <button class="delete-course">X</button>
                </div>`
        )
    } else if (e.target.classList.contains("delete-semester")) {
        let semester = e.target.closest(".semester");
        let partition = semester.previousElementSibling;


        semester.remove();

        if (partition && partition.classList.contains("horizontal-partition")) {
            partition.remove();
        }

        semesterNumber();
    }
})


let totalCgpa = 0.00;
function calculateCgpa() {
    let gradePoints = 0;
    let creditHours = 0;
    let semesters = document.querySelectorAll(".semester")

    semesters.forEach((semester) => {
        let courses = semester.querySelectorAll(".course-row")
        let cgpa = semester.querySelector(".calculation");
        let progressBar = semester.querySelector(".progress");
        let progressBarCgpa = semester.querySelector(".progress-cgpa");
        courses.forEach((course) => {
            let grade = +course.querySelector(".grade").value
            let credit = +course.querySelector(".credits").value
            if (grade && credit) {

                console.log("grades:", grade, ", credits:", credit);
                gradePoints += grade * credit;
                creditHours = creditHours + credit;
                console.log(`gradePoints : ${gradePoints},creditHours : ${creditHours}`);
            }

        }
        )

        totalCgpa = gradePoints / creditHours || 0;
        console.log(`total cgpa: ${totalCgpa.toFixed(2)}`);

        cgpa.innerText = `Semester Cgpa: ${totalCgpa.toFixed(2)}`

        progressBar.style.setProperty("--value", totalCgpa.toFixed(2))
        progressBarCgpa.innerText = totalCgpa.toFixed(2)

        progressBar.style.backgroundColor = getCgpaColor(totalCgpa);

        gradePoints = 0;
        creditHours = 0;

    })
}

function addSemester() {

    let semesterContainer = document.querySelector("#semester-container")
    // semesterCount++;
    semesterContainer.insertAdjacentHTML('beforeend',
        
        ` 
        <div class="horizontal-partition"></div>
        <div class="semester">
        <div class="semester-left">
        <div class="inside-header">
        <h2 class="semester-heading">Semester</h2>
        <button class="delete-semester">X</button>
        </div>
        <div class="courses">
        <div class="course-row">
        <input type="text" class="course" placeholder="Course name">
        <select name="Grade" class="grade">
        <option value="" selected hidden>Grade</option>
        <option value="4.0">A+ (90+)</option>
        <option value="4.0">A (85-89)</option>
                                <option value="3.8">A- (80-84)</option>
                                <option value="3.4">B+ (75-79)</option>
                                <option value="3.0">B (71-74)</option>
                                <option value="2.8">B- (68-70)</option>
                                <option value="2.4">C+ (64-67)</option>
                                <option value="2.0">C (61-63)</option>
                                <option value="1.8">C- (57-60)</option>
                                <option value="1.4">D+ (53-56)</option>
                                <option value="1.0">D (45-52)</option>
                                </select>
                                <select name="credits" class="credits">
                                <option value="" disabled selected hidden>Credits</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                </select>
                                <button class="delete-course">X</button>
                                </div>
                                <div class="course-row">
                                <input type="text" class="course" placeholder="Course name">
                                <select name="Grade" class="grade">
                                <option value="" disabled selected hidden>Grade</option>
                                <option value="4.0">A+ (90+)</option>
                                <option value="4.0">A (85-89)</option>
                                <option value="3.8">A- (80-84)</option>
                                <option value="3.4">B+ (75-79)</option>
                                <option value="3.0">B (71-74)</option>
                                <option value="2.8">B- (68-70)</option>
                                <option value="2.4">C+ (64-67)</option>
                                <option value="2.0">C (61-63)</option>
                                <option value="1.8">C- (57-60)</option>
                                <option value="1.4">D+ (53-56)</option>
                                <option value="1.0">D (45-52)</option>
                                </select>
                                <select name="credits" class="credits">
                                <option value="" disabled selected hidden>Credits</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                </select>
                                <button class="delete-course">X</button>
                                </div>
                                <div class="course-row">
                                <input type="text" class="course" placeholder="Course name">
                                <select name="Grade" class="grade">
                                <option value="" disabled selected hidden>Grade</option>
                                <option value="4.0">A+ (90+)</option>
                                <option value="4.0">A (85-89)</option>
                                <option value="3.8">A- (80-84)</option>
                                <option value="3.4">B+ (75-79)</option>
                                <option value="3.0">B (71-74)</option>
                                <option value="2.8">B- (68-70)</option>
                                <option value="2.4">C+ (64-67)</option>
                                <option value="2.0">C (61-63)</option>
                                <option value="1.8">C- (57-60)</option>
                                <option value="1.4">D+ (53-56)</option>
                                <option value="1.0">D (45-52)</option>
                                </select>
                                <select name="credits" class="credits">
                                <option value="" disabled selected hidden>Credits</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                </select>
                                <button class="delete-course">X</button>
                                </div>
                                <div class="course-row">
                                <input type="text" class="course" placeholder="Course name">
                                <select name="Grade" class="grade">
                                <option value="" disabled selected hidden>Grade</option>
                                <option value="4.0">A+ (90+)</option>
                                <option value="4.0">A (85-89)</option>
                                <option value="3.8">A- (80-84)</option>
                                <option value="3.4">B+ (75-79)</option>
                                <option value="3.0">B (71-74)</option>
                                <option value="2.8">B- (68-70)</option>
                                <option value="2.4">C+ (64-67)</option>
                                <option value="2.0">C (61-63)</option>
                                <option value="1.8">C- (57-60)</option>
                                <option value="1.4">D+ (53-56)</option>
                                <option value="1.0">D (45-52)</option>
                                </select>
                                <select name="credits" class="credits">
                                <option value="" disabled selected hidden>Credits</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                            <option value="2">2</option>
                            </select>
                            <button class="delete-course">X</button>
                            </div>
                            
                            </div>
                            
                            <div class="cgpa">
                            <span class="calculation">Semester Cgpa: 0.00</span>
                            <div>
                            <button class="receipt" onclick="printReceipt(this)">Print Receipt</button>
                            <button class="add-course">Add Course</button>
                            </div>
                            </div>
                            
                            </div>
                            <div class="partition"></div>
                            <div class="semester-right">
                            
                <div class="progress_wrapper">
                <div class="progress"></div>
                
                <div class="data">
                <h1 class="progress-cgpa">0.00</h1>
                <p>Out of 4.0</p>
                </div>
                </div>
                </div>
                
                </div>`
            )

            semesterNumber();
            
        }

        
        function printReceipt(btn) {
            
            let semester = btn.closest(".semester");
            let courses = semester.querySelectorAll(".course-row");
            // course.forEach(e=>{console.log(e)})
            // console.log(course);
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "overlay");
            
            
            let html = `
            <div id="modal-overlay">
            <div class="model-close-button">
            <button id="close-model" onclick="closeModel()">x</button>
            </div>
            
            <div id="transcript-model">
            <h3>Semester Transcript</h3>
            <div id="transcript-content">
            <div id="transcript">
            <table >
            <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Credit</th>
            </tr>
            <tr>`
            courses.forEach((course) => {
                let courseName = course.querySelector(".course").value
                let grade = course.querySelector(".grade").value
                let credit = course.querySelector(".credits").value
                
                html += `
                <tr>
                <td>${courseName || "Null"}</td>
                <td>${grade || "Null"}</td>
                <td>${credit || "Null"}</td>
                </tr>
                
                `
                
    })
    
    html += ` </table>
    </div>
    </div>
    <div class="transcript-result">
    <h4>Total Cgpa: ${totalCgpa.toFixed(2)} / 4.00</h4>
    </div>
    </div>
    <div class="model-button">
    <button id="download-btn" onclick="downloadd()">Download</button>
    </div>
    
    </div>`
    // let newWindow=window.open("")
    // newWindow.document.write(html);
    // let test=document.querySelector(".test");
    // test.innerHTML=html;
    newDiv.innerHTML = html
    document.body.appendChild(newDiv);
    
}

function downloadd() {
    // console.log("hello");
    
    let element = document.getElementById("transcript-model");
    // console.log(element);
    
    let options = {
        margin: 10,
        filename: "transcript.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
    
    
}

function closeModel() {
    let div = document.getElementById("overlay")
    document.body.removeChild(div);
}


function getCgpaColor(cgpa){

    if(cgpa >= 3.7) return "#22c55e";
    if(cgpa >= 3.3) return "#4ade80";
    if(cgpa >= 3.0) return "#a3e635";
    if(cgpa >= 2.5) return "#facc15";
    if(cgpa >= 2.0) return "#fb923c";

    return "#ef4444";
}

function semesterNumber() {
    let semesterCount = 1
    let semesters = document.querySelectorAll(".semester")
    semesters.forEach((semester) => {
        let heading = semester.querySelector(".semester-heading")
        heading.innerText = `Semester ${semesterCount}`
        semesterCount++;
    })

}