<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

	</div class="o-wrapper">

	<footer class="c-footer">
	<div class="o-grid">
		<div class="o-grid__col o-grid__col--4-4-s o-grid__col--1-3-m o-grid__col--1-3-l o-grid__col--2-4-m o-grid__col--1-4-l ">
			<a href="<?php $this->options->siteUrl(); ?>" class="u-block u-font-regular"><?php $this->options->title(); ?></a>
		</div>
		<div class="o-grid__col o-grid__col--4-4-s o-grid__col--1-3-m o-grid__col--1-3-l o-grid__col--2-4-m o-grid__col--1-4-l ">
			<ul class="c-footer-list o-plain-list">
				<?php $this->widget('Widget_Metas_Category_List')->to($category); ?>
                    <?php while ($category->next()): ?>
                    <li class="c-nav__item"><a class="c-nav__link" href="<?php $category->permalink(); ?>" title="<?php $category->name(); ?>"><?php $category->name(); ?></a></li>
                    <?php endwhile; ?>
			</ul>
		</div>
		<div class="o-grid__col o-grid__col--4-4-s o-grid__col--1-3-m o-grid__col--1-3-l o-grid__col--2-4-m o-grid__col--1-4-l ">
			<ul class="c-footer-list o-plain-list">
				<li>
				<a href="https://github.com/chun-awa" target="_blank" rel="noopener">
				<div class="icon icon--ei-sc-github icon--s ">
					<svg class="icon__cnt"><use xlink:href="#ei-sc-github-icon"></use></svg>
				</div>
              chun-awa
				</a>
				</li>
				<li>
				<a href="https://github.com/lsk-china" target="_blank" rel="noopener">
				<div class="icon icon--ei-sc-github icon--s ">
					<svg class="icon__cnt"><use xlink:href="#ei-sc-github-icon"></use></svg>
				</div>
              lsk-china
				</a>
				</li>
				<li>
 				<li>
				<a href="https://github.com/This-is-XiaoDeng" target="_blank" rel="noopener">
				<div class="icon icon--ei-sc-github icon--s ">
					<svg class="icon__cnt"><use xlink:href="#ei-sc-github-icon"></use></svg>
				</div>
              XiaoDeng3386
				</a>
				</li>
				<li>
				<a href="https://lty.ilty.top/" target="_blank" rel="noopener">
				<div class="icon icon--ei-link icon--s ">
					<svg class="icon__cnt"><use xlink:href="#ei-link-icon"></use></svg>
				</div>
            LMFS Make Free Software
				</a>
				</li>
                                <li>
				<a href="https://itcdt.top/" target="_blank" rel="noopener">
				<div class="icon icon--ei-link icon--s ">
					<svg class="icon__cnt"><use xlink:href="#ei-link-icon"></use></svg>
				</div>
            IT Craft Dev. Team
				</a>
				</li>
			</ul>
		</div>
		<div class="o-grid__col o-grid__col--4-4-s o-grid__col--2-4-m o-grid__col--1-4-l">
			<p class="u-font-medium">
				Search
			</p>
			<form method="post" action="<?php $this->options->siteUrl(); ?>" class="c-subscribe-form">
				<div class="form-group">
					<input class="c-subscribe-form__input" type="text" name="s" placeholder="关键词">
				</div>
				<button class="c-subscribe-form__btn c-btn c-btn--small c-btn--full" type="submit">搜索</button>
			</form>
		</div>
		<div class="o-grid__col o-grid__col--full">
			<div class="c-footer__copy">
				<span class="u-font-small u-text-center u-block">
          &copy; <?php echo date('Y'); ?> <?php $this->options->title(); ?> - Powered by <a href="https://github.com/typecho/typecho">Typecho</a>
				</span>
			</div>
		</div>
	</div>
	</footer>


</div>
<script src="<?php $this->options->themeUrl('js.js'); ?>"></script>
<?php $this->footer(); ?>
</body>
</html>
