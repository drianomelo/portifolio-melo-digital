export const site = {
  name: 'Melo Digital',
  title: 'Melo Digital — portfólio',
  description: 'Conheça os projetos e as ideias da Melo Digital.',
  headline: 'Ideias digitais ganham forma aqui.',
  introduction: 'Este é o espaço da Melo Digital para reunir projetos, processos e novas ideias. Os primeiros trabalhos serão publicados em breve.',
  about: 'Este espaço vai apresentar a trajetória da Melo Digital, seus processos e os trabalhos realizados. Novas informações serão adicionadas em breve.',
  githubUrl: 'https://github.com/drianomelo',
};

export type Project = {
  title: string;
  description: string;
  category: string;
  url: string;
  image?: string;
};

// Adicione projetos reais para substituir o estado inicial da seção.
export const projects: Project[] = [];
