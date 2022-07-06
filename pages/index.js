import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({resume}) {
  //console.log(resume.database[0].img)
  return (
    <div>
      <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
        <div className="row align-items-center px-3">
          <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">{resume.database[0].subjudul}</h4>
            <h1 className="display-3 font-weight-bold text-white">
              {resume.database[0].judul}
            </h1>
            <p className="text-white mb-4">
              {resume.database[0].desk}
            </p>
            <a href className="btn btn-secondary mt-1 py-3 px-5">{resume.database[0].button}</a>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src={resume.database[0].img} alt />
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30 }}>
                <i className={resume.database[1].item[0].icon} />
                <div className="pl-4">
                  <h4>{resume.database[1].item[0].judul}</h4>
                  <p className="m-0">
                  {resume.database[1].item[0].desk}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30 }}>
                <i className={resume.database[1].item[1].icon} />
                <div className="pl-4">
                  <h4>{resume.database[1].item[1].judul}</h4>
                  <p className="m-0">
                  {resume.database[1].item[1].desk}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30 }}>
                <i className={resume.database[1].item[2].icon}/>
                <div className="pl-4">
                  <h4>{resume.database[1].item[2].judul}</h4>
                  <p className="m-0">
                  {resume.database[1].item[2].desk}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">{resume.database[2].title}</span>
            </p>
            <h1 className="mb-4">{resume.database[2].judul}</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={resume.database[2].item[0].img} />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[0].icon1} /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[0].icon2} /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[0].icon3} /></a>
                </div>
              </div>
              <h4>{resume.database[2].item[0].nama}</h4>
              <i>{resume.database[2].item[0].keahlian}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={resume.database[2].item[1].img} alt />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[1].icon1} /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[1].icon2} /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[1].icon3} /></a>
                </div>
              </div>
              <h4>{resume.database[2].item[1].nama}</h4>
              <i>L{resume.database[2].item[1].keahlian}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={resume.database[2].item[2].img} alt />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[2].icon1} /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[2].icon2} /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[2].icon3} /></a>
                </div>
              </div>
              <h4>{resume.database[2].item[2].nama}</h4>
              <i>{resume.database[2].item[2].keahlian}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={resume.database[2].item[3].img} alt />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[3].icon1} /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[3].icon2}/></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[2].item[3].icon3}/></a>
                </div>
              </div>
              <h4>{resume.database[2].item[3].nama}</h4>
              <i>{resume.database[2].item[3].keahlian}</i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">{resume.database[3].title}</span>
            </p>
            <h1 className="mb-4">{resume.database[3].judul}</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={resume.database[3].item[0].img} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>{resume.database[3].item[0].judul}</h4>
                  <p>
                  {resume.database[3].item[0].desk}
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">{resume.database[3].item[0].button}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={resume.database[3].item[1].img} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>{resume.database[3].item[1].judul}</h4>

                  <p>
                  {resume.database[3].item[1].desk}
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">{resume.database[3].item[1].button}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img className="card-img-top mb-2" src={resume.database[3].item[2].img} alt />
                <div className="card-body bg-light text-center p-4">
                  <h4 className>{resume.database[3].item[2].judul}</h4>

                  <p>
                  {resume.database[3].item[2].desk}
                  </p>
                  <a href className="btn btn-primary px-4 mx-auto my-2">{resume.database[3].item[2].button}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">

            <p>
            {resume.database[4].item[0].desk}
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[4].item[0].icon1} /></a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[4].item[0].icon2} /></a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[4].item[0].icon3} /></a>
              <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="#"><i className={resume.database[4].item[0].icon4}/></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">{resume.database[4].item[1].judul}</h3>
            <div className="d-flex">
              <h4 className={resume.database[4].item[1].hubungi[0].icon} />
              <div className="pl-3">
                <h5 className="text-white">{resume.database[4].item[1].hubungi[0].judul}</h5>
                <p>{resume.database[4].item[1].hubungi[0].desk}</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className={resume.database[4].item[1].hubungi[1].icon} />
              <div className="pl-3">
                <h5 className="text-white">{resume.database[4].item[1].hubungi[1].judul}</h5>
                <p>{resume.database[4].item[1].hubungi[1].desk}</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className={resume.database[4].item[1].hubungi[2].icon} />
              <div className="pl-3">
                <h5 className="text-white">{resume.database[4].item[1].hubungi[2].judul}</h5>
                <p>{resume.database[4].item[1].hubungi[2].desk}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">{resume.database[4].item[2].judul}</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />{resume.database[4].item[2].text1}</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />{resume.database[4].item[2].text2}</a>
              <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />{resume.database[4].item[2].text3}</a>

            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">{resume.database[4].item[3].judul}</h3>
            <form action>
              <div className="form-group">
                <input type="text" className="form-control border-0 py-4" placeholder={resume.database[4].item[3].inputName} required="required" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control border-0 py-4" placeholder={resume.database[4].item[3].inputEmail} required="required" />
              </div>
              <div>
                <button className="btn btn-primary btn-block border-0 py-3" type="submit">
                {resume.database[4].item[3].button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
export async function getServerSideProps(context) {
  const linkdb = 'https://backend-uas-sem4.herokuapp.com/';
  const respondb = await fetch(linkdb);
  const datajson = await respondb.json();

  return {
    props: {
      resume: datajson
    }
  }
}
