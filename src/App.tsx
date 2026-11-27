import { useState } from 'react'

type Status = 'In development' | 'Coming soon'

interface Architecture {
  name: string
  description: string
  status: Status
}

const architectures: Architecture[] = [
  {
    name: 'AQA assembly',
    description: 'The A-level instruction set, built to follow the specification.',
    status: 'In development',
  },
  {
    name: 'Little Man Computer',
    description: 'The simple teaching computer with a short instruction set.',
    status: 'Coming soon',
  },
  {
    name: 'MIPS',
    description: '32-bit RISC, common in university architecture courses.',
    status: 'Coming soon',
  },
  {
    name: 'RISC-V (RV32I)',
    description: 'The open base instruction set.',
    status: 'Coming soon',
  },
  {
    name: '6502',
    description: 'The 8-bit processor behind many classic computers.',
    status: 'Coming soon',
  },
  {
    name: 'Z80',
    description: '8-bit processor from the ZX Spectrum era.',
    status: 'Coming soon',
  },
  {
    name: 'ARM',
    description: 'Widely used in phones, tablets and laptops.',
    status: 'Coming soon',
  },
  {
    name: 'Intel x86',
    description: 'Intel assembly, planned after the teaching architectures.',
    status: 'Coming soon',
  },
]

const sampleProgram = `MOV R0, #5
MOV R1, #3
ADD R2, R0, R1
STR R2, 100
HALT`

const sampleResult: { label: string; value: number }[] = [
  { label: 'R0', value: 5 },
  { label: 'R1', value: 3 },
  { label: 'R2', value: 8 },
  { label: 'Memory 100', value: 8 },
]

function App() {
  const [bannerDismissed, setBannerDismissed] = useState(false)

  return (
    <>
      {!bannerDismissed && (
        <div className="narrow-banner" role="status">
          <p>
            This site is built for widescreen laptops and desktop PCs. On a
            smaller screen, parts of it will not fit.
          </p>
          <button type="button" onClick={() => setBannerDismissed(true)}>
            Dismiss
          </button>
        </div>
      )}

      <div className="page">
        <header className="site-header">
          <span className="brand">SySCore Assembly Compiler</span>
          <a href="https://github.com/mrprojx/syscore-assembly">Source on GitHub</a>
        </header>

        <main>
          <section className="hero">
            <div className="hero-text">
              <h1>Write assembly and watch the machine run it</h1>
              <p className="lead">
                An assembler and emulator that runs entirely in your browser.
                Step through your program and see registers and memory change
                after every instruction. No account needed.
              </p>
              <p className="status">
                Under construction. AQA assembly comes first, then the other
                architectures below.
              </p>
              <p className="widescreen-note">
                Developed for widescreen laptops and desktop PCs, at 1280 pixels
                wide or more.
              </p>
            </div>

            <figure className="preview">
              <figcaption>Example program (preview only)</figcaption>
              <pre>
                <code>{sampleProgram}</code>
              </pre>
              <dl className="result">
                <dt className="result-title">After it halts</dt>
                {sampleResult.map((item) => (
                  <div className="result-row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </figure>
          </section>

          <section className="architectures" aria-labelledby="arch-heading">
            <h2 id="arch-heading">Architectures</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Architecture</th>
                  <th scope="col">About</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {architectures.map((arch) => (
                  <tr key={arch.name}>
                    <th scope="row">{arch.name}</th>
                    <td>{arch.description}</td>
                    <td
                      className={
                        arch.status === 'In development' ? 'active' : 'planned'
                      }
                    >
                      {arch.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <footer className="site-footer">
          <p>SySCore Assembly Compiler is open source under the MIT licence.</p>
        </footer>
      </div>
    </>
  )
}

export default App