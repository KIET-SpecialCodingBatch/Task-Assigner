import "./result.css"
import {useState,useEffect} from 'react'
import Axios from 'axios'
const Result = () => {
	const [phonebook,setPhonebook]=useState([]);
    useEffect(() => {
		Axios.get('http://localhost:8080/get-resume').then(res => {
		  setPhonebook(res.data.data.ResumeBuild[0])
		})
	  },[])
    return (
        <div>
			<body>

<div id="doc2" className="yui-t7">
	<div id="inner">
	
		<div id="hd">
			<div className="yui-gc">
				<div className="yui-u first">
					<h1>{phonebook.Name}</h1>
					<h2>{phonebook.TechnicalSkills}</h2>
				</div>
                  
				<div className="yui-u">
					<div className="contact-info">
						
						<h3><a href="#">{phonebook.Email}</a></h3>
						<h3>{phonebook.Mobile}</h3>
                        <h3>{phonebook.Github}</h3>
						<h3>{phonebook.Linkedin}</h3>
					</div>
                    <br/>
				</div>
			</div>
		</div>
        <div className="yui-gf">
            <h2 className="heading">Objective</h2>
            <p>{phonebook.Objective}</p>
        </div>
        <br/>
		<div id="bd">
			<div id="yui-main">
				<div className="yui-b">

					<div className="yui-gf">
						<div className="yui-u first">
							<h2 className="heading">Strengths</h2>
						</div>
						<div className="yui-u">
							<p className="enlarge">
								{phonebook.Strengths} 
							</p>
						</div>
					</div>
                        <br/>
					<div className="yui-gf">
						<div className="yui-u">
							<h2 className="heading">Projects</h2>
						</div>
                        <br/>
						<div className="yui-u">

								<div className="talent">
									<h4>{phonebook.Projects}</h4>
									
								</div>

								
						</div>
					</div>

					<div className="yui-gf">
						<div className="yui-u first">
                        <br/><br/>
							<h2 className="heading">TechnicalSkills</h2>
						</div>
                        <br/>
						<div className="yui-u">
							<ul className="talent">
	
								<li className="last">{phonebook.TechnicalSkills}</li>
							</ul>

						</div>
					</div>
                    <br/>
					<div className="yui-gf">
	           
						<div className="yui-u first">
							<h2 className="heading">Certifications</h2>
						</div>
                        <br/>
						<div className="yui-u">

							<div className="job">
								
								<h4>{phonebook.Certifications}</h4>
						
							</div>




						</div>


                        <br/>
					<div className="yui-gf last">
						<div className="yui-u first">
							<h2 className="heading">Education Qualifications</h2>
						</div>
                        <br/>
						<div className="yui-u">
							<h3>{phonebook.Education}</h3>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div id="ft">
			<p>{phonebook.Name} &mdash; <a href="#">{phonebook.Email}</a> &mdash; {phonebook.Mobile}</p>
		</div>

		<div className="yui-gf last">
		      <div className="yui-u first">
				<h2 className="heading">Hobbies</h2>
			  </div>
			  <div>
				<p>{phonebook.Hobbies}</p>
			  </div>
		</div>
		

	</div>
    <br/>
    <div className="yui-gf">
    <h2 className="heading">Personal Information</h2>
    </div>
    <br/>
    <div className="yui-u">
        <p>FatherName : {phonebook.FatherName}</p>
        <p>DateOfBirth: {phonebook.DateOfBirth}</p>
		<p>Nationality: {phonebook.Nationality}</p>
        <p>Religion   :{phonebook.Religion}</p>
		<p>Gender     :{phonebook.Gender}</p>
		<p>Address    :{phonebook.Address}</p>
		

    </div>
</div>
</div>

</body>

        </div>
    )
}


export default  Result;