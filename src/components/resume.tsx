import React from 'react';

class Resume extends React.Component {

    render() {
        return (
            <div className='flex-item'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 contact-form-container">
                            <h2>Resume</h2>
                            <p>Explore my professional background through my resume. It covers my skills, experiences, education, and key projects.</p>
                            <p>For a downloadable version, please click the download button.</p>
                            <iframe title='pdffile' src='https://file-examples.com/wp-content/storage/2017/10/file-sample_150kB.pdf' width='100%' height='500px' />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;