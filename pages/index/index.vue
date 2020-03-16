<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" @click="handleclick">
			<text class="title">{{title}}</text>
			<!-- azsd -->
		</view>
		<view>
			<button type="primary" @click="jumppage">跳转页面</button>

		</view>

		<view>
			<button class="btn" type="primary" @click="add">新增list</button>

		</view>

		<view>
			<button type="primary" @click="send_msg">发送请求</button>
		</view>

		<!-- 		<text>{{userinfo}}</text>
		<text>{{allstate}}</text> -->
		<view>
			<view class="uni-form-item uni-column">
				<view class="title">label用for标识表单组件</view>
				<radio-group class="uni-list" @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
						<view>
							<label class="label-2-text" :for="item.name">
								<text>{{item.value}}</text>
							</label>
						</view>
					</label>
				</radio-group>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
				radioItems: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					}
				],
			}
		},
		onLoad() {
			console.log('ss', this)
		},
		computed: {
			...mapState({
				//"keyword":"count"    //count可以显示
				"userinfo": state => {
					return state.user.userInfo
				},
				"allstate": state => JSON.stringify(state)
			}),
			userDta() {
				return JSON.stringify(this.$store.state.user)
			}
		},
		methods: {
			handleclick: () => {
				console.log('ss', this)
			},
			jumppage: function() {
				// console.log('jumppage',this.$store.state.user)
				uni.navigateTo({
					url: '../user/user'
				});
			},
			send_msg: function() {
				this.$store.dispatch('user/doLogin', {
					name: "haha"
				})
				// wx.showNavigationBarLoading()
			},
			add: function() {
				this.$store.dispatch('home/doLogin', {
					name: "haha"
				})
				console.log('state', this.$store.state)
			},
			radioChange: function(e) {
				var checked = e.target.value
				var changed = {}
				for (var i = 0; i < this.radioItems.length; i++) {
					if (checked.indexOf(this.radioItems[i].name) !== -1) {
						changed['radioItems[' + i + '].checked'] = true
					} else {
						changed['radioItems[' + i + '].checked'] = false
					}
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
