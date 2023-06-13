import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const GitHubGraph = ({ loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    GitHub History
                  </span>
                )}
              </h5>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                {loading ? (
                    renderSkeleton()
                )   : (
                    <img
                        src="https://ghchart.rshah.org/fb2d69/philomathmac"
                        alt="PhilomathMac's Github History Chart"
                    />
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

GitHubGraph.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default GitHubGraph;