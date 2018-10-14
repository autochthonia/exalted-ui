import React from 'react';

import { storiesOf } from '@storybook/react';

import Sidebar from '../src/Sidebar';

storiesOf('Sidebar', module)
  .add('basic', () => (
    <>
      <div style={{ height: '300px', width: '300px' }}>
        <Sidebar>test</Sidebar>
      </div>
      <div style={{ height: '600px', width: '300px' }}>
        <Sidebar>tall test</Sidebar>
      </div>
    </>
  ))
  .add('advanced', () => (
    <>
      <div style={{ height: '300px', width: '300px' }}>
        <Sidebar>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
              An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
              venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et, venenatis
              auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et dapibus. In
              et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis tincidunt,
              ultricies est ac, efficitur purus. Aenean accumsan id tortor et consequat.
            </p>
          </div>
        </Sidebar>
      </div>
      <div style={{ height: '600px', width: '400px' }}>
        <Sidebar>
          <div style={{ width: '100%', overflowY: 'auto' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
              An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
              venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et, venenatis
              auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et dapibus. In
              et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis tincidunt,
              ultricies est ac, efficitur purus. Aenean accumsan id tortor et consequat.
            </p>
            <p>
              Etiam lobortis, diam et porttitor accumsan, ante purus dictum tellus, nec convallis
              dui arcu non purus. Sed sodales elementum lectus non sollicitudin. Suspendisse
              volutpat pulvinar metus, a elementum leo elementum eu. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquam
              finibus enim, sit amet imperdiet nunc malesuada a. Duis lorem metus, laoreet quis erat
              ac, suscipit vulputate mi. Aliquam consectetur orci a ligula commodo eleifend. Duis
              ultrices aliquet dolor, non vulputate elit commodo sit amet. Vivamus id pretium leo,
              id feugiat quam. Morbi rutrum eros non nunc blandit vestibulum. Curabitur faucibus
              purus a imperdiet ultricies. Fusce vitae accumsan velit. Donec quis diam viverra,
              volutpat leo id, vehicula leo. Praesent tincidunt, tellus ut commodo mattis, dolor ex
              tristique neque, et hendrerit augue ipsum sit amet odio. Nullam facilisis mollis
              velit, sit amet efficitur turpis maximus at. Phasellus in mauris bibendum, bibendum
              odio vel, interdum lectus.
            </p>
            <p>
              Vestibulum nec mi non augue elementum convallis nec sed sem. Etiam mollis mi eu luctus
              rhoncus. Duis tempor fermentum venenatis. Cras dictum est non ex luctus, sit amet
              semper dolor molestie. Cras pellentesque enim id laoreet varius. Nunc at lacus libero.
              Aenean at dapibus felis. Nulla sem nunc, blandit quis blandit at, consectetur ac
              lectus. In laoreet augue enim, in pharetra massa suscipit et. Curabitur ut purus
              ipsum. Morbi laoreet orci erat, ut eleifend tortor lacinia sed.
            </p>
          </div>
        </Sidebar>
      </div>
      <div style={{ height: '600px', width: '400px' }}>
        <Sidebar>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{
                display: 'block',
                margin: '0 auto',
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                paddingBottom: '12px',
              }}
            />
            <div style={{ overflowY: 'auto' }}>
              <p>
                An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
                venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et,
                venenatis auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et
                dapibus. In et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis
                tincidunt, ultricies est ac, efficitur purus. Aenean accumsan id tortor et
                consequat.
              </p>
              <p>
                Etiam lobortis, diam et porttitor accumsan, ante purus dictum tellus, nec convallis
                dui arcu non purus. Sed sodales elementum lectus non sollicitudin. Suspendisse
                volutpat pulvinar metus, a elementum leo elementum eu. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquam
                finibus enim, sit amet imperdiet nunc malesuada a. Duis lorem metus, laoreet quis
                erat ac, suscipit vulputate mi. Aliquam consectetur orci a ligula commodo eleifend.
                Duis ultrices aliquet dolor, non vulputate elit commodo sit amet. Vivamus id pretium
                leo, id feugiat quam. Morbi rutrum eros non nunc blandit vestibulum. Curabitur
                faucibus purus a imperdiet ultricies. Fusce vitae accumsan velit. Donec quis diam
                viverra, volutpat leo id, vehicula leo. Praesent tincidunt, tellus ut commodo
                mattis, dolor ex tristique neque, et hendrerit augue ipsum sit amet odio. Nullam
                facilisis mollis velit, sit amet efficitur turpis maximus at. Phasellus in mauris
                bibendum, bibendum odio vel, interdum lectus.
              </p>
              <p>
                Vestibulum nec mi non augue elementum convallis nec sed sem. Etiam mollis mi eu
                luctus rhoncus. Duis tempor fermentum venenatis. Cras dictum est non ex luctus, sit
                amet semper dolor molestie. Cras pellentesque enim id laoreet varius. Nunc at lacus
                libero. Aenean at dapibus felis. Nulla sem nunc, blandit quis blandit at,
                consectetur ac lectus. In laoreet augue enim, in pharetra massa suscipit et.
                Curabitur ut purus ipsum. Morbi laoreet orci erat, ut eleifend tortor lacinia sed.
              </p>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  ))
  .add('stretch', () => (
    <>
      <div style={{ height: '300px', width: '300px' }}>
        <Sidebar stretch>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
              An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
              venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et, venenatis
              auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et dapibus. In
              et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis tincidunt,
              ultricies est ac, efficitur purus. Aenean accumsan id tortor et consequat.
            </p>
          </div>
        </Sidebar>
      </div>
      <div style={{ height: '600px', width: '400px' }}>
        <Sidebar stretch>
          <div style={{ width: '100%', overflowY: 'auto' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
              An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
              venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et, venenatis
              auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et dapibus. In
              et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis tincidunt,
              ultricies est ac, efficitur purus. Aenean accumsan id tortor et consequat.
            </p>
            <p>
              Etiam lobortis, diam et porttitor accumsan, ante purus dictum tellus, nec convallis
              dui arcu non purus. Sed sodales elementum lectus non sollicitudin. Suspendisse
              volutpat pulvinar metus, a elementum leo elementum eu. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquam
              finibus enim, sit amet imperdiet nunc malesuada a. Duis lorem metus, laoreet quis erat
              ac, suscipit vulputate mi. Aliquam consectetur orci a ligula commodo eleifend. Duis
              ultrices aliquet dolor, non vulputate elit commodo sit amet. Vivamus id pretium leo,
              id feugiat quam. Morbi rutrum eros non nunc blandit vestibulum. Curabitur faucibus
              purus a imperdiet ultricies. Fusce vitae accumsan velit. Donec quis diam viverra,
              volutpat leo id, vehicula leo. Praesent tincidunt, tellus ut commodo mattis, dolor ex
              tristique neque, et hendrerit augue ipsum sit amet odio. Nullam facilisis mollis
              velit, sit amet efficitur turpis maximus at. Phasellus in mauris bibendum, bibendum
              odio vel, interdum lectus.
            </p>
            <p>
              Vestibulum nec mi non augue elementum convallis nec sed sem. Etiam mollis mi eu luctus
              rhoncus. Duis tempor fermentum venenatis. Cras dictum est non ex luctus, sit amet
              semper dolor molestie. Cras pellentesque enim id laoreet varius. Nunc at lacus libero.
              Aenean at dapibus felis. Nulla sem nunc, blandit quis blandit at, consectetur ac
              lectus. In laoreet augue enim, in pharetra massa suscipit et. Curabitur ut purus
              ipsum. Morbi laoreet orci erat, ut eleifend tortor lacinia sed.
            </p>
          </div>
        </Sidebar>
      </div>
      <div style={{ height: '600px', width: '400px' }}>
        <Sidebar stretch>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <img
              src="http://placehold.it/150x50/fff/"
              style={{
                display: 'block',
                margin: '0 auto',
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: 'auto',
                paddingBottom: '12px',
              }}
            />
            <div style={{ overflowY: 'auto' }}>
              <p>
                An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
                venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et,
                venenatis auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et
                dapibus. In et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis
                tincidunt, ultricies est ac, efficitur purus. Aenean accumsan id tortor et
                consequat.
              </p>
              <p>
                Etiam lobortis, diam et porttitor accumsan, ante purus dictum tellus, nec convallis
                dui arcu non purus. Sed sodales elementum lectus non sollicitudin. Suspendisse
                volutpat pulvinar metus, a elementum leo elementum eu. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquam
                finibus enim, sit amet imperdiet nunc malesuada a. Duis lorem metus, laoreet quis
                erat ac, suscipit vulputate mi. Aliquam consectetur orci a ligula commodo eleifend.
                Duis ultrices aliquet dolor, non vulputate elit commodo sit amet. Vivamus id pretium
                leo, id feugiat quam. Morbi rutrum eros non nunc blandit vestibulum. Curabitur
                faucibus purus a imperdiet ultricies. Fusce vitae accumsan velit. Donec quis diam
                viverra, volutpat leo id, vehicula leo. Praesent tincidunt, tellus ut commodo
                mattis, dolor ex tristique neque, et hendrerit augue ipsum sit amet odio. Nullam
                facilisis mollis velit, sit amet efficitur turpis maximus at. Phasellus in mauris
                bibendum, bibendum odio vel, interdum lectus.
              </p>
              <p>
                Vestibulum nec mi non augue elementum convallis nec sed sem. Etiam mollis mi eu
                luctus rhoncus. Duis tempor fermentum venenatis. Cras dictum est non ex luctus, sit
                amet semper dolor molestie. Cras pellentesque enim id laoreet varius. Nunc at lacus
                libero. Aenean at dapibus felis. Nulla sem nunc, blandit quis blandit at,
                consectetur ac lectus. In laoreet augue enim, in pharetra massa suscipit et.
                Curabitur ut purus ipsum. Morbi laoreet orci erat, ut eleifend tortor lacinia sed.
              </p>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  ))
  .add('resizable', () => (
    <div style={{ resize: 'both', height: '300px', width: '300px', overflow: 'auto' }}>
      <Sidebar forceUpdate>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <img
            src="http://placehold.it/150x50/fff/"
            style={{
              display: 'block',
              margin: '0 auto',
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: 'auto',
              paddingBottom: '12px',
            }}
          />
          <div style={{ overflowY: 'auto' }}>
            <p>
              An image and a paragraph. Curabitur venenatis eget libero vel viverra. Fusce id
              venenatis sapien, vel hendrerit augue. Donec sem leo, rutrum vel tortor et, venenatis
              auctor enim. Suspendisse potenti. Phasellus pellentesque iaculis augue et dapibus. In
              et libero aliquet lacus cursus luctus nec ut metus. Duis eu turpis tincidunt,
              ultricies est ac, efficitur purus. Aenean accumsan id tortor et consequat.
            </p>
            <p>
              Etiam lobortis, diam et porttitor accumsan, ante purus dictum tellus, nec convallis
              dui arcu non purus. Sed sodales elementum lectus non sollicitudin. Suspendisse
              volutpat pulvinar metus, a elementum leo elementum eu. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquam
              finibus enim, sit amet imperdiet nunc malesuada a. Duis lorem metus, laoreet quis erat
              ac, suscipit vulputate mi. Aliquam consectetur orci a ligula commodo eleifend. Duis
              ultrices aliquet dolor, non vulputate elit commodo sit amet. Vivamus id pretium leo,
              id feugiat quam. Morbi rutrum eros non nunc blandit vestibulum. Curabitur faucibus
              purus a imperdiet ultricies. Fusce vitae accumsan velit. Donec quis diam viverra,
              volutpat leo id, vehicula leo. Praesent tincidunt, tellus ut commodo mattis, dolor ex
              tristique neque, et hendrerit augue ipsum sit amet odio. Nullam facilisis mollis
              velit, sit amet efficitur turpis maximus at. Phasellus in mauris bibendum, bibendum
              odio vel, interdum lectus.
            </p>
            <p>
              Vestibulum nec mi non augue elementum convallis nec sed sem. Etiam mollis mi eu luctus
              rhoncus. Duis tempor fermentum venenatis. Cras dictum est non ex luctus, sit amet
              semper dolor molestie. Cras pellentesque enim id laoreet varius. Nunc at lacus libero.
              Aenean at dapibus felis. Nulla sem nunc, blandit quis blandit at, consectetur ac
              lectus. In laoreet augue enim, in pharetra massa suscipit et. Curabitur ut purus
              ipsum. Morbi laoreet orci erat, ut eleifend tortor lacinia sed.
            </p>
          </div>
        </div>
      </Sidebar>
    </div>
  ));
