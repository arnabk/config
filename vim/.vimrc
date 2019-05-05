" Specify a directory for plugins
" - For Neovim: ~/.local/share/nvim/plugged
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.vim/plugged')

Plug 'pangloss/vim-javascript'
Plug 'wesQ3/vim-windowswap'
Plug 'mxw/vim-jsx'
Plug 'leshill/vim-json'
Plug 'ctrlpvim/ctrlp.vim'
Plug 'junegunn/fzf.vim', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'SirVer/ultisnips'
Plug 'editorconfig/editorconfig-vim'
Plug 'scrooloose/nerdtree'
Plug 'ajh17/Spacegray.vim'
Plug 'jelera/vim-javascript-syntax'
Plug 'w0rp/ale'
Plug 'Shougo/deoplete.nvim', { 'do': '':UpdateRemotePlugins'' }
Plug ''Xuyuanp/nerdtree-git-plugin''
Plug 'airblade/vim-gitgutter'
Plug 'vim-scripts/Risto-Color-Scheme'
Plug 'flazz/vim-colorschemes'
Plug 'vim-airline/vim-airline'
Plug 'w0rp/ale'
Plug 'alpertuna/vim-header'
Plug 'Valloric/YouCompleteMe', { 'do': './install.py --tern-completer' }

" Make sure you use single quotes

" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
" Plug 'junegunn/vim-easy-align'

" Any valid git URL is allowed
" Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Multiple Plug commands can be written in a single line using | separators
" Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" On-demand loading
" Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
" Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Using a non-master branch
" Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
" Plug 'fatih/vim-go', { 'tag': '*' }

" Plugin options
" Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

" Plugin outside ~/.vim/plugged with post-update hook
" Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Unmanaged plugin (manually installed and updated)
" Plug '~/my-prototype-plugin'

" Initialize plugin system
call plug#end()

syntax on
set encoding=utf-8
colorscheme material-theme
set termguicolors
set updatetime=100
set mousemodel=extend
set mouse=a
autocmd vimenter * NERDTree
let NERDTreeShowHidden=1
" autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
set number
let g:jsx_ext_required = 0
let g:header_auto_add_header = 0
let g:header_field_author = 'Arnab Karmakar'
let g:header_field_author_email = 'akarmakar@sphera.com'
map <F4> :AddHeader<CR>
map <F3> :cnext
" Start autocompletion after 4 chars
let g:ycm_min_num_of_chars_for_completion = 4
let g:ycm_min_num_identifier_candidate_chars = 4
let g:ycm_enable_diagnostic_highlighting = 0
" Don't show YCM's preview window [ I find it really annoying ]
set completeopt-=preview
let g:ycm_add_preview_to_completeopt = 0

