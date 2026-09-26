import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NewsCard from './NewsCard'

describe('NewsCard', () => {
    it('Mostra a categoria e o título recebidos por props', () => {
        render(
            <MemoryRouter>
                <NewsCard id={1} categoria='Cidade' titulo='Metrô terá horário extendido' />
            </MemoryRouter>
        )

        expect(screen.getByText('Cidade')).toBeInTheDocument()
        expect(screen.getByText('Metrô terá horário extendido')).toBeInTheDocument()
    })
})