import { Fragment } from 'react';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { ga, languageColor, skeleton } from '../../helpers/utils';

const Work_Projects = ({work_projects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({ width: 'w-32', height: 'h-8' })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderProjects = () => {
    return work_projects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center opacity-60">
              <span>
                <h5 className="card-title text-lg text-base-content">
                  {item.name}
                </h5>
              </span>
            </div>
            <div alignSelf="center" vspace="20" style={{objectFit: "contain", overflow: "hidden", borderRadius: "10px"}}>
              <br/>
              <img src={item.image_url} onError={i => i.target.parentElement.style.display='none'} style={{width: "1158", height: "628", objectFit: "contain"}}>
              </img>
              <br/>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-gradient-to-br to-base-200 from-base-100 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-28', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Apps Built At Work
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading || !work_projects ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Work_Projects.propTypes = {
  work_projects: PropTypes.arrayOf(
    PropTypes.shape({
      html_url: PropTypes.string,
      name: PropTypes.string,
      image_url: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Work_Projects;
